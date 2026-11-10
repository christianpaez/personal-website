FROM ruby:2.7-bullseye

# Bullseye is archived/EOL; update apt sources accordingly
RUN sed -i 's|http://deb.debian.org/debian|http://archive.debian.org/debian|g; s|http://security.debian.org/debian-security|http://archive.debian.org/debian-security|g; /bullseye-updates/d' /etc/apt/sources.list \
  && printf 'Acquire::Check-Valid-Until "false";\n' > /etc/apt/apt.conf.d/99no-check-valid-until

# Dependencies for building native extensions and running Jekyll
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    git \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

# Install gems first for better layer caching
COPY Gemfile Gemfile.lock* ./
RUN gem install bundler -v 2.4.22 \
  && bundle _2.4.22_ install

# Site source is mounted at runtime for live editing
EXPOSE 4000

CMD ["bundle", "_2.4.22_", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--force_polling", "--livereload"]
