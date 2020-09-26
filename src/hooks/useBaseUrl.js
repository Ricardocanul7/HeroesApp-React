const { useState } = require("react");

export const useBaseUrl = () => {
    const href = window.location.href;
    const [baseUrl, setBaseUrl] = useState(href);

}