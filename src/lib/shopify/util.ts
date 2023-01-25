import type { ConnectionType } from "./types";

const CONNECTION_REQUEST_INCREMENT = 10;

/**
 * Requests all connection nodes for a connection request
 * @param requestMethod request returning { connection: { nodes, pageInfo } }
 * @returns node array
 */
export async function getAllConnectionNodes<T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestMethod: (...args: any[]) => Promise<{ connection: ConnectionType<T> }>
): Promise<T[]> {
  let accNodes: T[];

  const queryVariables = {
    count: CONNECTION_REQUEST_INCREMENT,
    cursor: undefined,
  };

  let shouldRequest = true;

  while (shouldRequest) {
    const res = await requestMethod(queryVariables);
    const { nodes, pageInfo } = res.connection;
    const { hasNextPage, endCursor } = pageInfo;

    // Append nodes
    accNodes = [...(accNodes ?? []), ...nodes];
    // Continue requests if there are remaining items
    shouldRequest = hasNextPage;
    queryVariables.cursor = endCursor;
  }

  return accNodes;
}
