import { readExcelData } from "../utils/readExcel";
import { Journey } from "../types/journey";

export async function getProcessedJourneys(): Promise<Journey[]> {
  const rawData = await readExcelData();

  const eventsGroupedBySessionId = rawData.reduce<
    Record<string, (typeof rawData)[number][]>
  >((acc, event) => {
    const key = event.sessionId;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(event);
    return acc;
  }, {});

  const journeys: Journey[] = [];

  for (const sessionId in eventsGroupedBySessionId) {
    const eventsOfSession = eventsGroupedBySessionId[sessionId] ?? [];

    const filteredEvents = eventsOfSession.filter((event) => event.createdAt);

    const sortedEvents = filteredEvents.sort((a, b) => {
      const dateA = a.createdAt!.getTime();
      const dateB = b.createdAt!.getTime();
      return dateA - dateB;
    });

    const allSources = sortedEvents.map((event) => event.utmSource);

    if (allSources.length <= 2) {
      journeys.push({
        sessionId,
        journey: allSources,
        touchPoints: allSources.length,
      });
    } else {
      const first = allSources[0];
      const last = allSources[allSources.length - 1];
      const middle = allSources.slice(1, allSources.length - 1);

      const uniqueMiddle = [];
      const seen = new Set();
      for (const source of middle) {
        if (!seen.has(source)) {
          uniqueMiddle.push(source);
          seen.add(source);
        }
      }

      const finalJourney = [first, ...uniqueMiddle, last];

      journeys.push({
        sessionId,
        journey: finalJourney,
        touchPoints: finalJourney.length,
      });
    }
  }

  return journeys;
}
