const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2IwMWE0MjM5QHN2ZWN3LmVkdS5pbiIsImV4cCI6MTc4MjM3NjAwNCwiaWF0IjoxNzgyMzc1MTA0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmIyODFkOWYtMjZiYi00NDFhLWI2ZTAtMmQxMzcwNWJjNjQ4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibW9oYW5hIGp5b3RoaSIsInN1YiI6Ijg5M2VjYmYxLTIyYzgtNGRlYi1hMDUxLTkxMjIyZDNmNzgxNCJ9LCJlbWFpbCI6IjIzYjAxYTQyMzlAc3ZlY3cuZWR1LmluIiwibmFtZSI6Im1vaGFuYSBqeW90aGkiLCJyb2xsTm8iOiIyM2IwMWE0MjM5IiwiYWNjZXNzQ29kZSI6ImFoWGp2cCIsImNsaWVudElEIjoiODkzZWNiZjEtMjJjOC00ZGViLWEwNTEtOTEyMjJkM2Y3ODE0IiwiY2xpZW50U2VjcmV0IjoiY1B5R3lnVXJOUnhla1ZnayJ9.S4lgryvtudPJE5xr9t2u8DxaL0DcJhAx0fxkpw4lo2Y"
export async function Log(stack, level, pkg, message) {
  try {
    await fetch("http://4.224.186.213/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer access_token: ${TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message
      })
    });
  } catch (err) {
    console.error(err);
  }
}