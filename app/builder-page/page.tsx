import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "./builder";
import Link from "next/link";

export const dynamic = "force-dynamic";

builder.init("9d2e860e4a03432eb4be7dbd1d6a6c3e");

export default async function BuilderPage() {
  const model = "page";
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/my-page",
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();
  console.log("contentcontent");
  return (
    <div>
      <Link href="/">Go to main page</Link>
      <br />
      <RenderBuilderContent content={content} model={model} />
    </div>
  );
}
