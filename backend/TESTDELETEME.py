import psycopg2

try:
    conn = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="mydatabase",
        user="admin",
        password="secret"
    )
    print("✅ Connection successful!")
except Exception as e:
    print("❌ Connection failed:", e)
