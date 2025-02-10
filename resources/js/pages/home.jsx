import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Home Page</h1>
                    <p className="text-lg text-gray-400">This is a placeholder page. Customize it as needed!</p>
                </div>
            </div>
        </>
    );
}
