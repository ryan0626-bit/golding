import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import React from 'react'

const useStyles = makeStyles(theme => ({
  paper: {
    // padding: theme.spacing(3),
    // height: '10vh',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
  },

  ryansNav: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'ceenter',
  },
  navButton: {
    '&:hover': {
      cursor: 'pointer',
    },

    paddingBottom: '.5rem',
    marginLeft: '1rem',
    marginRight: '1rem',
  },

  smallScreen: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  bigScreen: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  route: {
    padding: '1.7rem',
  },
}))

export default function NavBar() {
  const classes = useStyles()
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }
  const openPage = page => {
    history.push(`/${page}`)
    handleClose()
  }

  return (
    <Paper className={clsx(classes.paper, classes.ryansNav)}>
      <div>
        <Typography variant="h4">Company Logo</Typography>
      </div>
      <div style={{ flexGrow: 1 }} />
      <div className={classes.bigScreen}>
        <div className={classes.route}>Profile</div>
        <div className={classes.route}>My account</div>
        <div className={classes.route}>About</div>
      </div>
      <div className={classes.smallScreen}>
        <div className={classes.navButton}>
          <IconButton onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
        </div>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => openPage('profile')}>Profile</MenuItem>
          <MenuItem onClick={() => openPage('account')}>My account</MenuItem>
          <MenuItem onClick={() => openPage('about')}>About</MenuItem>
        </Menu>
      </div>
    </Paper>
  )
}
