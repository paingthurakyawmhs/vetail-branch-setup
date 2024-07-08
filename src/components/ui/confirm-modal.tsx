import { useDeleteBranch } from "@/store/server/branch-setup/mutation";
import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";

const ConfirmModal = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    minHeight: "80px",
    bgcolor: "background.paper",
    borderRadius: "10px",
    border: "none",
    boxShadow: 24,
    p: 4,
  };

  const deleteBranch = useDeleteBranch();

  return (
    <Box component={"div"} mx={10}>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Box component={"h4"} m={0}>
            Are you want to delete it?
          </Box>
          <Box
            mt={2}
            display={"flex"}
            justifyContent={"end"}
            gap={2}
            alignItems={"center"}
          >
            <Button
              onClick={() => setOpen(false)}
              variant="contained"
              color="inherit"
            >
              Cancel
            </Button>
            <Button
              onClick={() => deleteBranch.mutate(id)}
              disabled={deleteBranch.isPending}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ConfirmModal;
