import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack
} from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={1} mb={1}>
          <Chip
            label={notification.type}
            color="primary"
            size="small"
          />
        </Stack>

        <Typography variant="body1">
          {notification.message}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
        >
          {notification.timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}