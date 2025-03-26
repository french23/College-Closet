// Connect to backend
docker exec -it project-root-db-1 psql -U admin -d postgres

// Start backend
uvicorn src.main:app --reload

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INTEGER
);

INSERT INTO users (name, email, age) VALUES
    ('John Smith', 'john.smith@example.com', 22),
    ('Emma Johnson', 'emma.j@example.com', 20),
    ('Michael Brown', 'michael.b@university.edu', 21),
    ('Sarah Davis', 'sarah.d@college.edu', 19),
    ('David Wilson', 'david.w@example.com', 23);
    


for install
npm install
npm run dev
