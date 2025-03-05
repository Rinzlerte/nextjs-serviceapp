import CustomerSearch from "@/app/(rs)/customers/CustomerSearch"
import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults"
import CustomerTable from "@/app/(rs)/customers/CustomerTable"
// import * as Sentry from '@sentry/nextjs';

export const metadata = {
    title: "Customer Search",
}

export default async function Customers({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { searchText } = await searchParams;


 // this will start a trace in sentry and will gives details about how long result takes
    // if (!searchText) return <CustomerSearch />

    // const span = Sentry.startInactiveSpan({
    //     name: 'getCustomerSearchResults-vers-1'
    // })
   
    // const results = await getCustomerSearchResults(searchText);
    // span.end();

    if (!searchText) return <CustomerSearch />

    const results = await getCustomerSearchResults(searchText);

    return (
        <>
            <CustomerSearch />
            {results.length ? <CustomerTable data={results} /> : (
                <p className="mt-4">No results found</p>
            )}
        </>
    )
}