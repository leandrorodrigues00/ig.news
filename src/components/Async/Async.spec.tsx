import {render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import { Async } from '.';


it('renders correctly', async () => {
    render(<Async />)

    

    expect(screen.getByText('Hello world')).toBeInTheDocument();
 
    
    await waitFor(()=> {
        return expect(screen.queryByText('Button')).not.toBeInTheDocument();
    })

})