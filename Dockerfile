# ✅ Base image
FROM node:20-slim

# ✅ Set working directory
WORKDIR /app

# ✅ Install dependencies based on lockfile
COPY package*.json ./

# ⛏️ Consider installing optional deps safely (and reproducibly)
RUN npm install --legacy-peer-deps

# ✅ Copy rest of the app (optional for dev if you're using volumes)
COPY . .

# ✅ Expose Vite default dev port
EXPOSE 3001

# ✅ Start Vite dev server
CMD ["npm", "run", "dev"]
