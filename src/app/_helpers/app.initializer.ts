import { AccountService } from '@app/_services';

export function appInitializer(accountService: AccountService) {
    return () => new Promise<void>((resolve) => {  // Specify Promise<void>
        accountService.refreshToken()
            .subscribe({
                complete: () => resolve(), // Ensure resolve() is called when observable completes
                error: () => resolve(),    // Handle errors to prevent hanging
            });
    });
}