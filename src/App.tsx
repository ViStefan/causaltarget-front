import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, type createRouter } from "@tanstack/react-router";
import type { FunctionComponent } from "./common/types";
import { TanStackRouterDevelopmentTools } from "./components/utils/development-tools/TanStackRouterDevelopmentTools";
import SignHeader from "./components/layout/SignHeader";

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<>
		<SignHeader />
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<TanStackRouterDevelopmentTools
				initialIsOpen={false}
				position="bottom-right"
				router={router}
			/>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
		</>
	);
};

export default App;
