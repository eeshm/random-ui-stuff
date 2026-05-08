

function Upload() {
    return (
        <section className="w-full max-w-xl p-6 sm:p-8">

            <form className="mt-6">
                <label
                    htmlFor="file-upload"
                    className="mb-2 block text-sm font-medium "
                >
                    Select File
                </label>
                <input
                    id="file-upload"
                    type="file"
                    className="block w-full rounded-lg border px-3 py-2 text-sm text-foreground "
                />
            </form>
        </section>
    )
}

export default Upload