# Awasiya Bal Vidya Mandir School — MERN Starter
## when you will change the  email or password then run command in server 
  <!-- The login API checks the database record, not the .env file directly.

So the correct sequence is always:

edit .env
delete old admin if needed
run node scripts/seedAdmin.js
test login in Postman -->


A responsive school website starter for **Awasiya Bal Vidya Mandir School, Jaunpur**.

## Stack

- React + Vite
- React Router
- CSS responsive UI
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- bcryptjs password hashing

## 1. Install

From the project root:

```bash
npm install
npm run install-all
```

## 2. Configure MongoDB

Copy:

```text
server/.env.example
```

to:

```text
server/.env
```

Then set your MongoDB URI and a strong JWT secret.

For local MongoDB:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/awasiya_bal_vidya_mandir
```

For MongoDB Atlas, replace it with your Atlas connection string.

## 3. Create the first admin

```bash
npm run seed:admin --prefix server
```

The default development credentials are:


ADMIN_EMAIL=admin@vidhyamandirbajitpur.edu.in
ADMIN_PASSWORD=vidhya25@12Mandir!

Change these before production.

## 4. Start the application

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

API:

```text
http://localhost:5000
```

Health check:

```text
http://localhost:5000/api/health
```

## Deploy the API to Render

Create a Render Web Service using the repository root as its root directory:

```text
Build command: yarn
Start command: npm start
```

The root install runs the backend dependency installation, and the start script
launches the Express server in `server/`. Set `MONGODB_URI`, `JWT_SECRET`, and
`CLIENT_URL` in the Render service's environment variables. `CLIENT_URL` should
be the deployed frontend's origin.

## API overview

Public:

```text
POST /api/admissions
POST /api/contact
GET  /api/events
GET  /api/gallery
GET  /api/facilities
GET  /api/testimonials
```

Admin:

```text
POST /api/auth/login
GET  /api/auth/me

GET/POST/PUT/DELETE /api/events
GET/POST/PUT/DELETE /api/gallery
GET/POST/PUT/DELETE /api/facilities
GET/POST/PUT/DELETE /api/testimonials

GET/PATCH /api/admissions
GET/PATCH /api/contact
```

Admin CRUD requests require:

```text
Authorization: Bearer <JWT>
```

## Next

The next frontend stage is to add the admin login/dashboard and connect the public forms and dynamic content to these APIs. Image uploads can then be added with Cloudinary or another object-storage provider.
##mongodb atlas
rkrishna32517_db_user

altas password
