export default function CleanHtml(htmlString: string) {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
}
