import express from "express";
import {
	createTicket,
	getTicketById,
} from "../controllers/ticketController.js";

const router = express.Router();

router.post("/", createTicket);
router.get("/:id", getTicketById);

export default router;
