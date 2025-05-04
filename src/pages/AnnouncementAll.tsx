import { useEffect, useState } from 'react';
import { AnnouncementService } from '../api/services/AnnouncementService';
import { Announcement } from '../types/Announcement';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TfiAnnouncement } from 'react-icons/tfi';
import { FcCalendar } from 'react-icons/fc';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';
import {Link} from "react-router";


dayjs.locale('tr');

function AnnouncementAll() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const limit = 1;

    const loadAnnouncements = async () => {
        const data = await AnnouncementService.getHomepageItems({ offset, limit, is_active: -1 });
        setAnnouncements(prev => [...prev, ...data]);
        setOffset(prev => prev + data.length);
        if (data.length < limit) {
            setHasMore(false);
        }
    };

    const getIconData = (type: string) => {
        if (type === 'announcement') {
            return {
                icon: <TfiAnnouncement />, iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
            };
        }
        return {
            icon: <FcCalendar />, iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' }
        };
    };

    useEffect(() => {
        loadAnnouncements();
    }, []);

    return (
        <div className="container my-10">
            <h2 className="text-2xl font-bold mb-6">Tüm Duyuru ve Etkinlikler</h2>
            <VerticalTimeline className="w-100">
                {announcements.map((item) => {
                    const isPast = dayjs(item.date).isBefore(dayjs(), 'day');
                    const { icon, iconStyle } = getIconData(item.type);

                    return (
                        <Link to={`/duyurular/${item.id}`} className="no-underline text-white">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            textClassName={isPast ? 'bg-gray-500' : 'bg-orange-bold'}
                            contentStyle={{
                                color: '#fff',
                                background: isPast ? '#6c757d' : '#f97316'
                            }}
                            contentArrowStyle={{ borderRight: '7px solid #f97316' }}
                            key={item.id}
                            date={dayjs(item.date).format('D MMMM YYYY')}
                            dateClassName="text-dark"
                            icon={icon}
                            iconStyle={isPast ? { background: '#6c757d', color: '#fff' } : iconStyle}
                        >
                            <h3>{item.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: item.description }} />
                        </VerticalTimelineElement>
                        </Link>
                    );
                })}            </VerticalTimeline>
            {hasMore && (
                <div className="text-center mt-6">
                    <button className="btn btn-secondary" onClick={loadAnnouncements}>
                        Daha Fazla Göster
                    </button>
                </div>
            )}
        </div>
    );
}

export default AnnouncementAll;
