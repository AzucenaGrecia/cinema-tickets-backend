import express from "express";
import {
	createTicket,
	getTicketById,
} from "../controllers/ticketController.js";

const router = express.Router();

router.post("/pay", createTicket);
router.get("/ticket/:ticket_id", getTicketById);

export default router;
