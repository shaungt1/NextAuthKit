import { Toggle } from '@/registry/new-york/ui/toggle';
import { FontBoldIcon } from '@radix-ui/react-icons';

export default function ToggleDemo() {
    return (
        <Toggle aria-label='Toggle italic'>
            <FontBoldIcon className='size-4' />
        </Toggle>
    );
}
