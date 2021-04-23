
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import { Layout } from "components/Layout";

const useStyles = makeStyles((theme: any) => ({
  root: {
    textAlign: "center",
    height: "calc(100vh - 64px)",
    position: "relative"
  },
  background: {
    top: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingTop: "10%",
    backgroundColor: "#fafafa",
    zIndex: -1
  },
  chipContainer: {
    display: "flex",
    justifyContent: "center"
  },
  chip: {
    margin: "5px 10px",
    color: theme.palette.primary.text,
    backgroundColor: theme.palette.primary.main
  },
  strip: {
    paddingTop: 30,
    paddingBottom: 30
  }
}));

const Index: React.FC = ({flagHelper}: any) => {
  const handleOpenLink = (href: string) => {
    window.open(href);
    return false;
  };
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.background}>
        </div>
        <Head>
          <title>Countryball Creator</title>
        </Head>
        <div className={classes.strip}>
        {flagHelper && (<div>hello</div>)}
        
        </div>
      </div>
    </Layout>
  );
};

export default Index;
