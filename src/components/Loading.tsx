const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-bl from-indigo-300 via-blue-300 to-purple-300 min-h-screen pt-10">
            <div
                className="h-20 w-20 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-500"
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export { Loading };
