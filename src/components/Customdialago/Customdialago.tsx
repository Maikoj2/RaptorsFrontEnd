import { SubjectManager } from "@/models";
import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useEffect, useState } from 'react';
import { Subscription } from 'rxjs'


export interface Props {
	children: React.ReactNode
}
export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();
const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
	  children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>,
  ) {
	return <Slide direction="up" ref={ref} {...props} />;
  });

const Customdialago = ({children}:Props) => {
	const [open, setOpen] = useState(false);
	let openSubject$ = new Subscription();
	let CloseSubject$ = new Subscription();

	useEffect(() => {
		openSubject$ = dialogOpenSubject$.getSubject.subscribe(() => handleClickOpen());
		CloseSubject$ = dialogCloseSubject$.getSubject.subscribe(() => handleClose());
		return () => {
			openSubject$.unsubscribe();
			CloseSubject$.unsubscribe();
		};


	}, [])
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleExit = () => {
		dialogCloseSubject$.setSubject = false;
	};



	return <Dialog
		open={open}
		onClose={() => handleExit()}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
		keepMounted
		TransitionComponent={Transition}
	>
		{children}
	</Dialog>;
};

export default Customdialago;

