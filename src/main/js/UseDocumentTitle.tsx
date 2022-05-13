import {useEffect} from "react";

export default function useDocumentTitle(title: string): void {
  useEffect(() => {
    window.document.title = (title ? `${title} - mattbague` : "mattbague")
  }, [title]);
}