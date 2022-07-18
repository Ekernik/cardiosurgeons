type propTypes = {
  email?: string;
};
const EmailLink: React.FC<propTypes> = ({
  email = 'heartteam.spb@gmail.com',
}) => <a href={`mailto:${email}`}>{email}</a>;

export default EmailLink;
