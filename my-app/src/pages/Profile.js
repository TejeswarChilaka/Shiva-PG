import { Container, Paper, Avatar, Typography, Button } from "@mui/material";

function ProfilePage() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
        <Avatar
          alt="User Avatar"
          src="/img-01.jpg"
          sx={{ width: 100, height: 100, marginBottom: 2 }}
        />
        <Typography variant="h5" gutterBottom>
          Tejeswar Reddy
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Web Developer
        </Typography>
        <Typography variant="body1" paragraph>
          Conscious Planet is a global effort to raise human
          consciousness and inspire responsible action. It implements several
          large-scale projects in environment, rural education and health, and
          community revitalization.Get initiated into a simple Diksha (sadhana)
          by Sadhguru for your wellbeing and enhance your receptivity to Shiva’s
          grace.
        </Typography>
        <Button variant="contained" color="primary">
          Edit profile
        </Button>
      </Paper>
    </Container>
  );
}

export default ProfilePage;
