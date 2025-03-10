import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york/ui/alert';
import { RocketIcon } from '@radix-ui/react-icons';

export default function AlertDemo() {
    return (
        <Alert>
            <RocketIcon className='size-4' />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
        </Alert>
    );
}
