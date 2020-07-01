import { toast } from 'react-toastify';

toast.configure(1000);
const notify = message => toast(message);

export default notify;
