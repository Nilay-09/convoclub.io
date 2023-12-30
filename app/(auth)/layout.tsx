
const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className='flex justify-center items-center h-full w-full bg-red-300'>
            {children}
        </div>
    )
}

export default AuthLayout
