'use client';

import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const DialogWrapper = () => {
    const localStorageKey = 'testers-dialog-opened';
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Check localStorage after component mounts
        const hasSeenDialog = localStorage.getItem(localStorageKey);
        if (hasSeenDialog === null) {
            setOpen(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem(localStorageKey, '0');
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open}>
                <DialogTitle>Hi, there!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`Thank you for clicking on link I sent you.`}
                        <br />
                        {`I'm trying to build a website for my business. It's supposed to attract customers that need`}
                        {`full solutions for their business needs.`}
                        <br />
                        {`Wether it's a website, an internal web app, deployment, marketing, testing, or anything else, I'd like to capture them in the form below.`}
                        <br />
                        <br />
                        {`The reason you're here is because I'd like you to tell me what's missing or what needs to be improved in terms of UX/UI or layout/design.`}
                        <br />
                        {`Remember this is still a work in progress, so I'd like to hear your feedback in Telegram.`}
                        <br/><br/>{`Once you click on the button below, you won't see this message again.`}
                    </DialogContentText>
                    <Box display="flex" justifyContent="flex-end" className="mt-4">
                        <Button variant="contained" color="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DialogWrapper;
