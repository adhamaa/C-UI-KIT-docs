# Timeline

Import: `import { Timeline } from '@adhamaa/ui-kit'`

A vertical list of events: an activity log, an audit trail, or a workflow's stages. It comes plain, or as cards in SWIFTO's style, with stages alternating left and right.

```tsx
import { Timeline, type TimelineEvent } from '@adhamaa/ui-kit'
```

```tsx
const Activity = () => <Timeline
    events={[
      {
        id: '1',
        title: 'Package submitted',
        actor: 'Aisyah Rahman',
        dateTime: '2026-11-10T09:12',
        time: '10 Nov, 9:12 AM',
        status: 'success' as const,
      },
      {
        id: '2',
        title: 'Returned for changes',
        actor: 'Lim Wei Jie',
        description: 'Bill of quantities is missing the drainage items.',
        dateTime: '2026-11-11T14:32',
        time: '11 Nov, 2:32 PM',
        status: 'warning' as const,
      },
      {
        id: '3',
        title: 'Resubmitted',
        actor: 'Aisyah Rahman',
        dateTime: '2026-11-12T10:05',
        time: '12 Nov, 10:05 AM',
        status: 'info' as const,
        metadata: [
          { label: 'Version', value: '2' },
          { label: 'Files', value: '3 attachments' },
        ],
      },
      { id: '4', title: 'Awaiting approval', status: 'pending' as const },
    ]}
    variant="activity"
    aria-label="Package history" />;
```

## Examples

### Events

Each event needs an `id` and a `title`. Add any of:

- `actor`: who did it, beside the title.
- `dateTime` (machine-readable, for the `<time>` element) and `time` (what's shown).
- `description`, and `metadata` as label/value pairs.
- `status` to colour the marker: `success`, `error`, `pending`, `info`, `warning` or `neutral`.
- `icon` inside the marker.
- For workflows: `department` and `stage` (shown after the actor as "Aina, Planning & Verification"), `reason` (like a rejection reason) and `sentFrom` (`{ name, department?, stage? }`, shown as a "Sent from" block).
- `date`, shown with `time`.

```tsx
<Timeline
  aria-label="Package history"
  events={history.map((h) => ({
    id: h.id,
    title: h.action,
    actor: h.user.name,
    dateTime: h.createdAt,
    time: formatDateTime(h.createdAt),
    status: h.action === 'Rejected' ? 'error' : 'success',
  }))}
/>
```

### Stages

`variant="status"` is roomier, for a workflow's stages rather than a dense log.

```tsx
const Stages = () => <Timeline
    events={[
      {
        id: 'a',
        title: 'Drafted',
        status: 'success',
        icon: <icons.CheckIcon />,
        time: '3 Nov',
      },
      {
        id: 'b',
        title: 'Engineer review',
        status: 'success',
        icon: <icons.CheckIcon />,
        time: '5 Nov',
      },
      {
        id: 'c',
        title: 'Finance review',
        status: 'pending',
        description: 'With Finance since 6 Nov.',
      },
      { id: 'd', title: 'Director approval', status: 'neutral' },
    ]}
    variant="status"
    aria-label="Approval stages" />;
```

### Cards, alternating left and right

`appearance="card"` puts each event in a bordered card coloured by its status. With `variant="status"` the markers grow and show a status icon (a tick, a cross, a clock…), and the time shows as a pill. `alternating` adds SWIFTO's zigzag: a centred line, with events alternating left and right and the time on the opposite side.

```tsx
const AlternatingCards = () => <Timeline
    events={[
      {
        id: '1',
        title: 'Work order created',
        actor: 'Afiq Rahman',
        department: 'Planning Office',
        stage: 'Planning',
        description: 'Initial creation of the work order.',
        dateTime: '2026-03-22T12:09',
        time: '22 Mar 2026, 12:09',
        status: 'success',
      },
      {
        id: '2',
        title: 'Submitted for verification',
        actor: 'Nadia Farhana',
        department: 'Engineering',
        stage: 'Submission',
        description: 'Details reviewed and forwarded to verification.',
        dateTime: '2026-03-23T09:30',
        time: '23 Mar 2026, 09:30',
        status: 'success',
        sentFrom: { name: 'Afiq Rahman', stage: 'Planning' },
      },
      {
        id: '3',
        title: 'Work order rejected',
        actor: 'Nurin Izzati',
        department: 'Approvals Committee',
        stage: 'Approval',
        reason: 'Rejected due to missing cost breakdown and unclear scope.',
        dateTime: '2026-03-24T15:02',
        time: '24 Mar 2026, 15:02',
        status: 'error',
        sentFrom: { name: 'Rafidah Noor', stage: 'Verification' },
      },
      {
        id: '4',
        title: 'Awaiting resubmission',
        actor: 'Afiq Rahman',
        department: 'Planning Office',
        status: 'pending',
        time: 'Pending',
      },
    ]}
    variant="status"
    aria-label="Work order history"
    appearance="card"
    alternating />;
```

```tsx
<Timeline
  variant="status"
  appearance="card"
  alternating
  aria-label="Work order history"
  events={history.map((h) => ({
    id: h.uuid,
    title: h.action,
    actor: h.user.name,
    department: h.user.department,
    stage: h.stage,
    reason: h.remarks,
    sentFrom: h.from ? { name: h.from.name, stage: h.from.stage } : undefined,
    dateTime: h.created_at,
    time: formatDateTime(h.created_at),
    status: h.action === 'Rejected' ? 'error' : 'success',
  }))}
/>
```

The colours come from the theme. A finished stage (`success`) and the time pill use `primary`, so with `swiftoTheme` they're SWIFTO's gold, and with the neutral theme they're blue. Errors use `destructive` and pending stages use `warning`. It works in dark mode like everything else.

When the timeline is narrower than 40rem, the zigzag falls back to one column, so it still fits a side panel or a phone. You can also leave `alternating` off:

```tsx
const StageCards = () => <Timeline
    events={[
      {
        id: '1',
        title: 'Work order created',
        actor: 'Afiq Rahman',
        department: 'Planning Office',
        stage: 'Planning',
        description: 'Initial creation of the work order.',
        dateTime: '2026-03-22T12:09',
        time: '22 Mar 2026, 12:09',
        status: 'success',
      },
      {
        id: '2',
        title: 'Submitted for verification',
        actor: 'Nadia Farhana',
        department: 'Engineering',
        stage: 'Submission',
        description: 'Details reviewed and forwarded to verification.',
        dateTime: '2026-03-23T09:30',
        time: '23 Mar 2026, 09:30',
        status: 'success',
        sentFrom: { name: 'Afiq Rahman', stage: 'Planning' },
      },
      {
        id: '3',
        title: 'Work order rejected',
        actor: 'Nurin Izzati',
        department: 'Approvals Committee',
        stage: 'Approval',
        reason: 'Rejected due to missing cost breakdown and unclear scope.',
        dateTime: '2026-03-24T15:02',
        time: '24 Mar 2026, 15:02',
        status: 'error',
        sentFrom: { name: 'Rafidah Noor', stage: 'Verification' },
      },
      {
        id: '4',
        title: 'Awaiting resubmission',
        actor: 'Afiq Rahman',
        department: 'Planning Office',
        status: 'pending',
        time: 'Pending',
      },
    ]}
    variant="status"
    aria-label="Work order history"
    appearance="card"
    alternating={false} />;
```

### Activity cards

With `variant="activity"`, cards get a dot with a soft ring, a dashed line, and a row with the `date` and `time` beside calendar and clock icons.

```tsx
const ActivityCards = () => <Timeline
    events={[
      {
        id: '1',
        title: 'Inspection completed',
        actor: 'Lim Wei Jie',
        description: 'Pothole at KM 12 measured and photographed.',
        date: '12 Nov 2026',
        time: '10:05 AM',
        dateTime: '2026-11-12T10:05',
        status: 'success',
        metadata: [
          { label: 'Route', value: 'R-12' },
          { label: 'Photos', value: '3' },
        ],
      },
      {
        id: '2',
        title: 'Contractor notified',
        description: 'Notice of defect sent to the contractor.',
        date: '12 Nov 2026',
        time: '11:40 AM',
        dateTime: '2026-11-12T11:40',
        status: 'info',
      },
      {
        id: '3',
        title: 'Repair overdue',
        description: 'No response within 48 hours.',
        date: '14 Nov 2026',
        time: '11:40 AM',
        dateTime: '2026-11-14T11:40',
        status: 'warning',
      },
    ]}
    variant="activity"
    aria-label="Activity log"
    appearance="card" />;
```

### Empty

```tsx
const Empty = () => <Timeline
    events={[]}
    variant="activity"
    aria-label="Package history"
    emptyMessage="No activity yet." />;
```

### Custom rendering

`renderIcon(event)` replaces an event's marker content, and `renderContent(event)` replaces its body (with cards, the title and card too). Your event type can carry extra fields: `Timeline` is generic over it.

`sentFromLabel` translates the "Sent from" label.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `events` (required) | `T[]` |  |  |
| `aria-label` | `string` | `'Timeline'` | Accessible name of the list. |
| `variant` | `'status' \| 'activity'` | `activity` | `activity`: dense, time first. `status`: roomier, for workflow stages. |
| `appearance` | `'plain' \| 'card'` | `plain` | `plain`: text beside small markers. `card`: each event in a bordered card coloured by its status. With `variant="status"`, card adds large markers with a status icon and shows the time as a pill; with `activity`, a ringed dot, a dashed line and a date and time row. |
| `alternating` | `boolean` | `false` | With `variant="status"`: a centred line with events alternating left and right, the time on the opposite side. Falls back to one column when the timeline is narrower than 40rem. |
| `sentFromLabel` | `ReactNode` | `Sent from` | Label of the `sentFrom` block, for translation. |
| `renderIcon` | `((event: T) => ReactNode)` |  | Replace an event's marker content. |
| `renderContent` | `((event: T) => ReactNode)` |  | Replace an event's body (title, time, description, metadata). |
| `emptyMessage` | `ReactNode` | `No activity yet` | Text while there are no events. |
| `className` | `string` |  |  |

## Styling

| Selector | Part |
| --- | --- |
| `.kit-timeline` | The list (`[data-variant]`, `[data-appearance]`, `[data-alternating]`) |
| `.kit-timeline__item` | One event |
| `.kit-timeline__marker` | The dot (`[data-status]`) |
| `.kit-timeline__connector` | The line between markers |
| `.kit-timeline__title`, `.kit-timeline__actor`, `.kit-timeline__time` | The heading |
| `.kit-timeline__description` | The description |
| `.kit-timeline__meta`, `.kit-timeline__meta-row` | The metadata |
| `.kit-timeline__reason` | The reason |
| `.kit-timeline__sent-from`, `.kit-timeline__sent-from-label` | The "Sent from" block |
| `.kit-timeline__card` | A card (`[data-status]`), with `appearance="card"` |
| `.kit-timeline__people` | The actor line in a card |
| `.kit-timeline__stamp`, `.kit-timeline__pill` | The time pill, with cards and `variant="status"` |
| `.kit-timeline__when`, `.kit-timeline__when-part` | The date and time row, with cards and `variant="activity"` |

The marker size is the CSS variable `--kit-tl-size` on `.kit-timeline`.

## Accessibility

Built on [ui-sdk Timeline](https://ui-sdk.dev/docs/react/components/timeline). It's a list named by `aria-label` ("Timeline" by default), and the arrow keys move between events. Times use `<time dateTime>`, so assistive technology gets an exact value. Status colours are decorative: say the status in the title too.

## Usage guidelines

**Do**

- Put the newest event first in an activity log, and the first stage first in a workflow.
- Name the timeline with `aria-label` when there's more than one on a page.

## Related

- **Badge**: a single status.

Web page: https://adhamaa.github.io/C-UI-KIT-docs/?path=/docs/components-data-display-timeline--docs
