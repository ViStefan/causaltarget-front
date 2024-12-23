import { createFileRoute } from "@tanstack/react-router";
import { PrivatePage } from "../pages/Private";

export const Route = createFileRoute("/private")({
	component: PrivatePage,
});
