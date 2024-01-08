import {
  Text,
  Field,
  withDatasourceCheck,
  ImageField,
  // Image,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
//import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs/utils';

//Set the public URL empty to resolve an issue with deployment restrictions in Vercel. Might need to enable this if we have to enable Experiance Editor support for the pages
//const publicUrl = getPublicUrl();
const publicUrl = '';

type introProps = ComponentProps & {
  fields: {
    IntroTitle: Field<string>;
    IntroSubtitle: Field<string>;
    IntroDescription: Field<string>;
    IntroImage: ImageField;
  };
};

const intro = (props: introProps): JSX.Element => (
  <>
    <div>
      <section>
        {/* <Image
          field={props?.fields.IntroImage}
          alt="main image"
          width={756}
          height={1183}
          className={styles.mainImage}
          style={{ position: 'relative', height: 'auto' }}
        /> */}

        <video controls>
          <source src={`${publicUrl}/assets/videos/ir.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>
          <h2 className="heading2">
            <Text field={props?.fields?.IntroTitle} />
          </h2>
          <h3 className="heading6">
            <Text field={props?.fields?.IntroSubtitle} />
          </h3>
          <RichText field={props?.fields?.IntroDescription} />
        </div>
      </section>
    </div>
  </>
);

export default withDatasourceCheck()<introProps>(intro);
