import { userService } from 'services';
import { Link } from 'components';

export default Home;

function Home() {
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
              
                <p><Link href="/users">Manage Companies</Link></p>
            </div>
        </div>
    );
}
