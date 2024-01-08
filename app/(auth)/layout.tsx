
const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className='flex justify-center items-center h-full w-full bg-primary-foreground'>
            {children}
        </div>
    )
}

export default AuthLayout
