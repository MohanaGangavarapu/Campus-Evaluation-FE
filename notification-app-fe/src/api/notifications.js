import { Log } from "../utils/logger";

const API_URL = "http://4.224.186.213/evaluation-service/notifications";

const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2IwMWE0MjM5QHN2ZWN3LmVkdS5pbiIsImV4cCI6MTc4MjM4MzAwNCwiaWF0IjoxNzgyMzgyMTA0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiM2MyOTFhODEtZmRjMi00ZmQ2LWIyM2UtNDFmOTA1MmU5ODZkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibW9oYW5hIGp5b3RoaSIsInN1YiI6Ijg5M2VjYmYxLTIyYzgtNGRlYi1hMDUxLTkxMjIyZDNmNzgxNCJ9LCJlbWFpbCI6IjIzYjAxYTQyMzlAc3ZlY3cuZWR1LmluIiwibmFtZSI6Im1vaGFuYSBqeW90aGkiLCJyb2xsTm8iOiIyM2IwMWE0MjM5IiwiYWNjZXNzQ29kZSI6ImFoWGp2cCIsImNsaWVudElEIjoiODkzZWNiZjEtMjJjOC00ZGViLWEwNTEtOTEyMjJkM2Y3ODE0IiwiY2xpZW50U2VjcmV0IjoiY1B5R3lnVXJOUnhla1ZnayJ9.gs7AW3cs1v6KtawQeKsr23JYqWrT4woISjQA6emMBfA"
export async function fetchNotifications() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const data = await response.json();

    await Log(
      "frontend",
      "info",
      "api",
      "Notifications fetched successfully"
    );

    return data.notifications;
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      "Failed to fetch notifications"
    );

    throw error;
  }
}