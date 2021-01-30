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
    marginRight: '2rem',
  },
  route: {
    color: 'white',
    padding: '.25rem 1rem .25rem 1rem',
    margin: '1rem',
    borderRadius: '2rem',
    // fontSize: theme.typography.pxToRem(20),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.main,
    },
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
    <div className={clsx(classes.paper, classes.ryansNav)}>
      <div>
        <Typography variant="h4">Company Logo</Typography>
      </div>
      <div style={{ flexGrow: 1 }} />
      <div className={classes.bigScreen}>
        <Typography variant="h6" className={classes.route} onClick={() => openPage('profile')}>
          Profile
        </Typography>
        <Typography variant="h6" className={classes.route} onClick={() => openPage('account')}>
          My account
        </Typography>
        <Typography variant="h6" className={classes.route} onClick={() => openPage('about')}>
          About
        </Typography>
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
    </div>
  )
}
