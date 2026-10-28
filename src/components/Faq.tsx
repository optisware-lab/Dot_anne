import { site } from "@/config/site";

/** Answers use confirmed facts only. Edit here when the owner confirms more. */
export const faqs = [
  {
    q: "Is the lodge open at night?",
    a: `Yes. The front desk is open 24 hours, every day. Call ${site.phone.display} before you arrive and someone will be ready for you.`,
  },
  {
    q: "Where exactly is Dot Anne Home Lodge?",
    a: `At 473 Golf Estate, Kpone Barrier, off BOST Road, Tema, Greater Accra. The Google Plus Code is ${site.address.plusCode} Tema, which you can paste into Google Maps or send to your driver.`,
  },
  {
    q: "How do I book a room?",
    a: `Call or WhatsApp the front desk on ${site.phone.display}. Tell us your dates and number of guests and we will confirm availability and the rate.`,
  },
  {
    q: "How much is a room per night?",
    a: "Rates depend on the room and your dates. Call or send a WhatsApp message for today's rate.",
  },
  {
    q: "Is there parking?",
    a: "Yes, guests can park inside the lodge compound.",
  },
  {
    q: "Do the rooms have private bathrooms and Wi-Fi?",
    a: "Yes. Rooms have their own bathroom with a shower, and Wi-Fi is free for guests.",
  },
];

export function Faq() {
  return (
    <div className="faq__list">
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
