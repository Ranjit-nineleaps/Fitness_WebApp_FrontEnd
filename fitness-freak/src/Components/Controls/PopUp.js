// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, Button } from '@material-ui/core';
// import Buttons from '../FormsUI/FieldButton'


// const useStyles = makeStyles(theme => ({
//     dialogWrapper: {
//         padding : theme.spacing(2),
//         position : 'absolute',
//         top : theme.spacing(5),

//     }
// }))
// function PopUp(props) {
//     const { 
//         title,
//         children,
//         openPopup,
//         setOpenPopup } = props;
//     const classes = useStyles();

//     return(
//         <Dialog open={openPopup} maxWidth="md" classes={{ paper:classes.dialogWrapper }}>
//             <DialogTitle>
//                 <div style={{display:'flex'}}>
//                     <Typography variant ="h6" component="div" style={{flexGrow:1}}>
//                         {title}
//                     </Typography>
//                     <Buttons
//                         color = 'secondary'
//                         text = "X"
//                     />
//                 </div>
//             </DialogTitle>
//             <DialogContent dividers>
//                 {children}
//             </DialogContent>
//         </Dialog>

//     );
// };

// export default PopUp;
