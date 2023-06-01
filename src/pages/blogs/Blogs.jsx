const Blogs = () => {
    return (
        <div>
            <div className="container my-10 ">
                <div>
                    <h1 className="text-3xl font-primary font-bold">Difference between SQL and NoSQL</h1>
                    <p className="my-4">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables, with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
                <div className="mt-10">
                    <h1 className="text-3xl font-primary font-bold">What is JWT, and how does it work?</h1>
                    <p className="my-4">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
</p>
                </div>
                <div className="mt-10">
                    <h1 className="text-3xl font-primary font-bold">What is the difference between javascript and NodeJS?</h1>
                    <p className="my-4">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
</p>
                </div>
                <div className="mt-10">
                    <h1 className="text-3xl font-primary font-bold">How does NodeJS handle multiple requests at the same time?</h1>
                    <p className="my-4">Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.
</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;