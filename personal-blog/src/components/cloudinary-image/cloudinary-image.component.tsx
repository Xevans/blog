import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

// in TS, you must define a type for a component you expect to pass props to
// think of them as structs. A component exptecting types needs to know how that data will be structured.
interface CloudinaryProps {
    name: string;
    width: number;
    height: number;
    definitions: string;
}

const CloudinaryImage: React.FC<CloudinaryProps> = (props) => {

    const {name, width, height, definitions } = props;
    

    const cld = new Cloudinary({ cloud: { cloudName: 'dn9rcml4g' } }); // make into global context and extraxt cld from context
  
    const img = cld
            .image(`blog-pics/${name}`)
            .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
            .quality('auto')
            .resize(auto().gravity(autoGravity()).width(width).height(height)); // Transform the image: auto-crop to square aspect_ratio

    return (
        <AdvancedImage className={definitions} cldImg={img} alt="" width={width} height={height}/>
    )
}

export default CloudinaryImage;