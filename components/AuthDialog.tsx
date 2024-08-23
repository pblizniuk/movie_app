import Link from "next/link";
import Auth from "@/components/Auth";

export default function Modal({
  searchParams,
}: {
  searchParams: any;
}) {

  return (
    <div className="fixed inset-0 bg-stone-900/50 overflow-y-auto h-full w-full flex items-center justify-center z-50 left-0 right-0 top-0 bottom-0">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-stone-900">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Modal Title</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg text-gray-500">Modal Body</p>
          </div>
          <Auth searchParams={searchParams} />
          <div className="flex justify-center mt-4">

            {/* Navigates back to the base URL - closing the modal */}
            <Link
              href="?"
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
