export default {
  paddingX: (value: number | string) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  paddingY: (value: number | string) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  marginX: (value: number | string) => ({
    marginLeft: value,
    marginRight: value,
  }),
  marginY: (value: number | string) => ({
    marginTop: value,
    marginBottom: value,
  }),
  flexCenter: () => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  flexItemsCenter: () => ({
    display: 'flex',
    alignItems: 'center',
  }),
  flexContentCenter: () => ({
    display: 'flex',
    justifyContent: 'center',
  }),
  rowCentered: () => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  rowCenteredX: () => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }),
  rowCenteredY: () => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  columnCentered: () => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  columnCenteredX: () => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  columnCenteredY: () => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
};
