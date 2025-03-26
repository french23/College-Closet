// Connect to backend

docker exec -it project-root-db-1 psql -U admin -d postgres

// Start backend

uvicorn src.main:app --reload

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50)
);

INSERT INTO users (name, email, password)
VALUES
  ('Alice Johnson', 'alice@example.com', 'password123'),
  ('Bob Smith', 'bob@example.com', 'hunter2'),
  ('Carol Lee', 'carol@example.com', 'qwerty123'),
  ('David Kim', 'david@example.com', 'letmein'),
  ('Eve Adams', 'eve@example.com', '12345678');



for install
npm install
npm run dev
