import type { FunctionComponent } from "@/common/types";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export const PrivatePage = (): FunctionComponent => {
	return (
		<div className="bg-blue-300  font-bold w-screen h-screen flex flex-col justify-center items-center">
			<SignedIn>
				<p className="text-white text-6xl">
					Congratulations, you visited private page.
				</p>
			</SignedIn>
			<SignedOut>
				<p className="text-white text-6xl">
					You must be logged in to visit this page.
				</p>
			</SignedOut>
		</div>
	);
};
