FROM mcr.microsoft.com/playwright:v1.62.1-noble

WORKDIR /app

# Java es requerido por allure-commandline para generar el reporte HTML
RUN apt-get update && apt-get install -y --no-install-recommends default-jre-headless \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV CI=true
ENV HEADLESS=true

CMD ["npm", "run", "test:all"]
