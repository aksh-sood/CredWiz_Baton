import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // backgroundImage: `url("https://picsum.photos/1200/720")`,
    // backgroundColor: theme.palette.primary.dark,

    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    minHeight:'100vh',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(30),
    }
  },
  description: {
    color: theme.palette.background.secondary
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
  secondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  }
}));

export default function Header(props) {
  const classes = useStyles();

  const content = {
    'header-p1': 'Welcome to',
    'header-p2': 'CredWiz',
    'description': 'Ultimate payment wallet for swift transfers, easy funding, hassle-free withdrawals, and real-time balance updates. Transform your finances today!',
    'primary-action': 'Sign Up',
    'secondary-action': 'Sign In',
    'pattern': 'https://www.globalpaymentsgaming.com/hubfs/option2%20%285%29.png',
    ...props.content
  };

  return (
    <section className={classes.section} style={{ backgroundImage: `url("${content['pattern']}")` }}>
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white">
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Typography color="secondary" variant="h2" component="span">{content['header-p1']} </Typography>
            <Typography variant="h2" component="span">{content['header-p2']}</Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.description}>{content['description']}</Typography>
          </Container>
          <Box mt={3}>
            <Button variant="contained" color="secondary" className={classes.primaryAction} component={Link} to="/signup">{content['primary-action']}</Button>
            <Button variant="outlined" color="secondary" className={classes.secondaryAction} component={Link} to="/signin">{content['secondary-action']}</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}