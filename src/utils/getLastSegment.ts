export const getLastSegment = (url: string) : string => {
    const parts = url.split('/');
    const lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    return lastSegment || '';
}